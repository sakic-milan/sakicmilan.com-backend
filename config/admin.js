module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f68a92732d48cbb6494233f59222aec5'),
  },
});
