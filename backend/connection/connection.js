// import postgres from 'postgres';
import pkg from "pg";
const { Pool } = pkg;
// const connection = postgres(process.env.DATABASE_URL);


// export default connection;
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

export default connection;