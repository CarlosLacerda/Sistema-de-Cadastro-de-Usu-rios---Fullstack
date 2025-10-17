import express from 'express'
import cors from 'cors'
import pkg from '@prisma/client'
const { PrismaClient } = pkg


const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.post('/users', async (req, res) => {
  console.log(req.body)
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: String(req.body.age)
      }
    })
    res.status(201).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar usuário' })
  }
})

app.get('/users', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.put('/users/:id', async (req, res) => {
  console.log(req)
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: String(req.body.age)
      }
    })
    res.status(200).json(user) 
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar usuário' })
  }
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuario deletado com Sucesso"})
})


app.listen(3000)

