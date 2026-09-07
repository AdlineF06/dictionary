from flask import Flask, request, redirect, render_template_string

app = Flask(__name__)
notes = []

TEMPLATE = """
<h1>Sticky Notes</h1>
<form method="POST" action="/add">
    <textarea name="note" rows="3" cols="30" placeholder="Write a note..."></textarea><br>
    <button type="submit">Add Note</button>
</form>
<div style="display:flex; flex-wrap:wrap; gap:10px;">
{% for i, note in notes %}
    <div style="background:#ffeb3b; padding:10px; width:150px;">
        {{ note }}
        <form method="POST" action="/delete/{{ i }}">
            <button type="submit">Delete</button>
        </form>
    </div>
{% endfor %}
</div>
"""

@app.route("/")
def index():
    return render_template_string(TEMPLATE, notes=list(enumerate(notes)))

@app.route("/add", methods=["POST"])
def add():
    note = request.form.get("note", "").strip()
    if note:
        notes.append(note)
    return redirect("/")

@app.route("/delete/<int:idx>", methods=["POST"])
def delete(idx):
    if 0 <= idx < len(notes):
        notes.pop(idx)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
