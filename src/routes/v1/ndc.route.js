const express = require('express');
const validate = require('../../middlewares/validate');

const ndcController = require('../../controllers/ndc.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/apply', auth(), ndcController.apply);
// router.post('/login', validate(authValidation.login), authController.login);
// router.post('/logout', validate(authValidation.logout), authController.logout);
// router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
// router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
// router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
// router.post('/send-verification-email', auth(), authController.sendVerificationEmail);
// router.post('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);

module.exports = router;
