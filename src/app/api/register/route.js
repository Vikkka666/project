import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ message: 'Email и пароль должны быть указаны.' }), { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return new Response(JSON.stringify({ message: 'Пользователь с таким email уже существует.' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return new Response(JSON.stringify({ id: user.id, email: user.email }), { status: 201 });
  } catch (error) {
    console.error('Ошибка создания пользователя:', error);
    return new Response(JSON.stringify({ message: 'Ошибка сервера. Попробуйте позже.' }), { status: 500 });
  }
}
