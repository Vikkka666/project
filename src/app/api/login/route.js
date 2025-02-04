// app/api/login/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'; // Убедитесь, что вы установили этот ключ в переменных окружения

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: 'Пользователь не найден.' }, { status: 400 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: 'Неверный пароль.' }, { status: 400 });
  }

  // Генерация JWT-токена
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

  // Возврат информации о пользователе и токена
  return NextResponse.json({ id: user.id, email: user.email, token }, { status: 200 });
}

export const config = {
  api: {
    bodyParser: true,
  },
};
