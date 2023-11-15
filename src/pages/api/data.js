const items = [];

export default async (req, res) => {
  await new Promise((r) => setTimeout(r, 1000));

  if (req.method === "POST") {
    const { text } = req.body;
    const newTodo = { id: Math.random().toString(), text: text.toUpperCase() };
    items.push(newTodo);
    res.json(newTodo);
    return;
  } else {
    res.json({
      ts: Date.now(),
      items,
    });
  }
};
