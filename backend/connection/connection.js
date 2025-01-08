import pkg from "pg";
const { Pool } = pkg;


// export default connection;
export default async () =>{
  const pool = new Pool({
    host: "ep-snowy-smoke-a1i7wer3-pooler.ap-southeast-1.aws.neon.tech",
    user: "neondb_owner",
    database: "neondb",
    password: "Ta56tJmewbHO",
    ssl: {
      rejectUnauthorized: true,
    },
  });
  const connection = await pool.connect();
}