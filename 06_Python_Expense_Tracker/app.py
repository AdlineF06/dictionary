from flask import Flask, request, redirect, render_template_string

app = Flask(__name__)
expenses = []

TEMPLATE = """
<h1>Expense Tracker</h1>
<form method="POST" action="/add">
    <input name="title" placeholder="Title" required>
    <input name="amount" placeholder="Amount" type="number" step="0.01" required>
    <button type="submit">Add Expense</button>
</form>
<table border="1" cellpadding="5">
<tr><th>#</th><th>Title</th><th>Amount</th><th>Action</th></tr>
{% for i, e in expenses %}
<tr>
    <td>{{ i+1 }}</td><td>{{ e.title }}</td><td>{{ e.amount }}</td>
    <td><form method="POST" action="/delete/{{ i }}"><button type="submit">Delete</button></form></td>
</tr>
{% endfor %}
</table>
<p><b>Total: {{ total }}</b></p>
"""

@app.route("/")
def index():
    total = sum(e["amount"] for e in expenses)
    return render_template_string(TEMPLATE, expenses=list(enumerate(expenses)), total=total)

@app.route("/add", methods=["POST"])
def add():
    title = request.form.get("title", "").strip()
    try:
        amount = float(request.form.get("amount", 0))
    except ValueError:
        amount = 0
    if title:
        expenses.append({"title": title, "amount": amount})
    return redirect("/")

@app.route("/delete/<int:idx>", methods=["POST"])
def delete(idx):
    if 0 <= idx < len(expenses):
        expenses.pop(idx)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
