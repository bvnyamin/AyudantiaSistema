import express from "express";
import cors from "cors";
import { pool } from "./basedatos.js";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(1111);
console.log("Servidor ya iniciado");

app.get("/proyecto", async (req, res) => {
  const [resultado] = await pool.query("select * from proyecto");
  res.send(resultado);
});

app.get("/proyecto/:id_proyecto", async (req, res) => {
  const [resultado] = await pool.query(
    "select * from proyecto where id_proyecto = ?",
    [req.params.id_proyecto]
  );
  res.send(resultado);
});

app.post("/proyecto", async (req, res) => {
  const { id_proyecto, nombre_proyecto, numero_estructura } = req.body;
  const [resultado] = await pool.query(
    "insert into proyecto(id_proyecto,nombre_proyecto, numero_estructura) values (?,?,?)",
    [id_proyecto, nombre_proyecto, numero_estructura]
  );
  res.send(resultado);
});

app.delete("/proyecto/:id_proyecto", async (req, res) => {
  const [resultado] = await pool.query(
    "delete from proyecto where id_proyecto = ?",
    [req.params.id_proyecto]
  );
  res.sendStatus(204);
});

app.put("/proyecto/:id_proyecto", async (req, res) => {
  const { nombre_proyecto, numero_estructura } = req.body;
  const [resultado] = await pool.query(
    "update proyecto set nombre_proyecto = ?, numero_estructura = ? where id_proyecto = ?",
    [nombre_proyecto, numero_estructura, req.params.id_proyecto]
  );
  pool.query("select * from proyecto where id_proyecto = ?", [
    req.params.id_proyecto,
  ]);
  res.sendStatus(204);
});
