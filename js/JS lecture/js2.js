const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const display = (function() {

    const JWT_SECRET = process.env.JWT_SECRET || 'replace_with_secure_secret';
    const SALT_ROUNDS = 12;
    const users = new Map(); // in-memory store: username -> { id, passwordHash }

    async function register({ username, password }) {
        if (!username || !password) throw new Error('username and password required');
        if (users.has(username)) throw new Error('user already exists');

        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
        const id = (crypto.randomUUID && crypto.randomUUID()) || crypto.randomBytes(16).toString('hex');
        users.set(username, { id, passwordHash });

        const token = jwt.sign({ sub: id, username }, JWT_SECRET, { expiresIn: '1h' });
        return { id, username, token };
    }

    async function login({ username, password }) {
        if (!username || !password) throw new Error('username and password required');
        const user = users.get(username);
        if (!user) throw new Error('invalid credentials');

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) throw new Error('invalid credentials');

        const token = jwt.sign({ sub: user.id, username }, JWT_SECRET, { expiresIn: '1h' });
        return { id: user.id, username, token };
    }

    function verifyToken(token) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch {
            return null;
        }
    }

    return { register, login, verifyToken, users };
})();