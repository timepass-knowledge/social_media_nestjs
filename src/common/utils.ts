import * as bcrypt from 'bcrypt';

async function getPasswordHash(password: string) {
    const salt = await bcrypt.genSalt(6);
    return await bcrypt.hash(password, salt);
}

async function comparePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
}

export { getPasswordHash, comparePassword };
