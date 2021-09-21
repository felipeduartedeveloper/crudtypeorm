import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgetPasswordController from '../controllers/ForgotPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgetPasswordController();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);

export default passwordRouter;
