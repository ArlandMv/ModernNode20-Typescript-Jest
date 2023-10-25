import mysql, { Pool, PoolConnection } from 'mysql2/promise'
//TRY LATER:QueryFunction, PoolOptions
import dotenv from 'dotenv'

dotenv.config()

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
})
//.promise()

export async function getVotes() {
  const [rows]: any = await pool.query(
    'SELECT vote, COUNT(vote) as vote_count FROM survey_mvp GROUP BY vote'
  )
  return rows
}

export async function createVote(email: String, vote: String): Promise<void> {
  try {
    const [result] = await pool.query(
      `
      INSERT INTO survey_mvp (email, vote)
      VALUES (?, ?)
      `,
      [email, vote]
    )

    console.log(result)
  } catch (error) {
    console.error('Error in createVote:', error)
    throw new Error('DB:Unable to create vote')
  }
}

//const test = await createVote('tests@x.com', 'MERN Stack')
//console.log(test)

/** 
// Export a function that returns a connection from the pool
export const getConnection = async (): Promise<PoolConnection> => {
  return await pool.getConnection();
};

// Additional utility function to query the database using promises
export const query = async <T>(sql: string, values?: any): Promise<T[]> => {
  const [rows] = await pool.execute(sql, values);
  return rows as T[];
};

*/
