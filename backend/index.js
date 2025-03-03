import express from "express";
import uniqid from "uniqid";
import fs from "fs";
const app = express();
import cors from "cors";
import { GPTScript, RunEventType } from "@gptscript-ai/gptscript";

const gptscript = new GPTScript();

app.use(cors());

app.get("/test", (req, res) => {
  return res.json("ok");
});
app.get("/create-story", async (req, res) => {
  const url = req.query.url;
  const dir_id = uniqid();
  const path = "./CreatedVideos/" + dir_id;
  fs.mkdirSync(path, { recursive: true });

  console.log("done", {
    url,
  });

  const running = await gptscript.run("./story.gpt", {
    input: `--url ${url} --dir ${dir_id}`,
    disableCache: true,
  });

  running.on(RunEventType.Event, (event) => {
    if (event.type === RunEventType.CallFinish && event.output) {
      console.log("event", event.output);
    }
  });

  const rslt = await running.text();
  return res.json("==ok==");
});

app.listen(8080, () => console.log("port running "));
