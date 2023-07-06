import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'TU_ID_DE_GITHUB',
      clientSecret: 'TU_SECRET_DE_GITHUB',
    }),
    // ...agrega más proveedores aquí
  ],
};

export default NextAuth(authOptions);
