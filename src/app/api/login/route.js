import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'; 

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: 'Не удалось зайти на аккаунт' }, { status: 400 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: 'Не удалось зайти на аккаунт' }, { status: 400 });
  }

 
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);

  return NextResponse.json({ id: user.id, email: user.email, token }, { status: 200 });
}

export const config = { 
  api: {
    bodyParser: true,
  },
};
