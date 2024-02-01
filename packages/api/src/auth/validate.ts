import dotenv from "dotenv";
import jwt, { JwtHeader, JwtPayload, SigningKeyCallback } from "jsonwebtoken";
import jwksClient from "jwks-rsa";

dotenv.config();

const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

const getKey = (header: JwtHeader, callback: SigningKeyCallback) => {
  client.getSigningKey(header.kid, (error, key) => {
    if (error) throw error;
    // @ts-expect-error Somehow I have the wrong type here... it doesn't think publicKey and rsaPublicKey exist.
    const signingKey: jwt.Secret = key?.publicKey || key?.rsaPublicKey;
    callback(null, signingKey);
  });
};

export const isTokenValid = (
  token: string
): Promise<{ decoded: jwt.JwtPayload } | { error: string }> => {
  if (token) {
    const bearerToken = token.split(" ");

    const result = new Promise<{ decoded: jwt.JwtPayload } | { error: string }>(
      (resolve) => {
        jwt.verify(
          bearerToken[1],
          getKey,
          {
            audience: process.env.API_IDENTIFIER,
            issuer: `https://${process.env.AUTH0_DOMAIN}/`,
            algorithms: ["RS256"],
          },
          (error, decoded) => {
            if (error) {
              console.error(error);
              resolve({ error: error.message });
            }
            if (decoded) {
              resolve({ decoded: decoded as JwtPayload });
            }
          }
        );
      }
    );

    return result;
  }

  return new Promise((resolve) => resolve({ error: "No token provided" }));
};
