/* import { User } from '../entities/User/User';
import { Request, Router, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado!' });
  }

  try {
    const secret = process.env.SECRET!;

    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ error: 'Token inválido!' });
  }
};

router.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(422).json({ message: 'E-mail já cadastrado!' });
    return;
  }

  const user = {
    name,
    email,
    password: passwordHash
  };

  try {
    await User.create(user);

    res.status(201).json({ message: 'Usuário criado.' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: 'Usuário não cadastrado!' });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(422).json({ message: 'Senha inválida!' });
  }

  try {
    const secret = process.env.SECRET!;
    const token = jwt.sign(
      {
        id: user._id
      },
      secret
    );

    console.log(jwt.decode(token));

    res.status(200).json({
      message: 'Autenticado!',
      token: token
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const user = await User.find().select('-password');

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/:id', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id, '-password');

  if (!user) {
    res.status(422).json({ message: 'O usuário não foi encontrado!' });
    return;
  }
  try {
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  const user = {
    name,
    email,
    password
  };

  try {
    const updatedUser = await User.updateOne({ _id: id }, user);
    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'O usuário não foi encontrado!' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id);

  if (!user) {
    res.status(422).json({ message: 'O usuário não foi encontrado!' });
    return;
  }

  try {
    await User.deleteOne({ _id: id });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
export default router;
 */
