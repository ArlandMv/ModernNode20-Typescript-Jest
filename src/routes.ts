/**

import { getConnection } from './database/connection.js' // Adjust the path based on your project structure
import { Request, Response } from 'express'

// Example route that queries the database
const exampleRoute = async (req: Request, res: Response): Promise<void> => {
  try {
    // Use the getConnection function from db.ts with async/await
    const connection = await getConnection()

    // Use the acquired connection for your database queries
    const [results] = await connection.query('SELECT * FROM your_table')

    // Release the connection back to the pool
    connection.release()

    // Respond with the results
    res.json(results)
  } catch (error) {
    // Handle errors
    console.error('Error in exampleRoute:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Export your routes
export { exampleRoute }
 */
