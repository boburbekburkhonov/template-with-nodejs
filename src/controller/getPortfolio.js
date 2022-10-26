import { errorHandlerError } from "../errors/errorHanler.js"
import { read, write } from "../utils/FS.js"

export const getPortfolio = async (req, res, next) => {
  const info = await read('data.json')
  .catch(err => next(new errorHandlerError(err.message, 500)))

  if(info) res.render('index.ejs', { info })
}

export const postPortFolio = async (req, res, next) => {
  const { name, email, message } = req.filtered;

  const allRequests = await read('requests.json')
  .catch(err => next(new errorHandlerError(err.message, 500)))

  if(allRequests) allRequests.push({id: allRequests.at(-1)?.id + 1 || 1, name, email, message});

  const newAllRequests = await write('requests.json', allRequests)
  .catch(err => next(new errorHandlerError(err.message, 500)))


  if(allRequests) res.send('Sizni so\'rovingiz qabul qilindi!')
}