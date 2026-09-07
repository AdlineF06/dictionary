import re
from flask import Flask, request, render_template_string

app = Flask(__name__)

TEMPLATE = """
<h1>Login / Signup Form</h1>
<form method="POST">
    <label>Username:</label><br>
    <input name="username" required><br><br>
    <label>Email:</label><br>
    <input name="email" required><br><br>
    <label>Password:</label><br>
    <input name="password" type="password" required><br><br>
    <button type="submit">Submit</button>
</form>
{% if errors %}
<ul style="color:red;">
    {% for e in errors %}<li>{{ e }}</li>{% endfor %}
</ul>
{% elif submitted %}
<p style="color:green;">Form submitted successfully!</p>
{% endif %}
"""

@app.route("/", methods=["GET", "POST"])
def form():
    errors = []
    submitted = False
    if request.method == "POST":
        username = request.form.get("username", "")
        email = request.form.get("email", "")
        password = request.form.get("password", "")

        if len(username) < 3:
            errors.append("Username must be at least 3 characters.")
        if not re.match(r"^[^@]+@[^@]+\.[^@]+$", email):
            errors.append("Enter a valid email address.")
        if len(password) < 6:
            errors.append("Password must be at least 6 characters.")

        if not errors:
            submitted = True

    return render_template_string(TEMPLATE, errors=errors, submitted=submitted)

if __name__ == "__main__":
    app.run(debug=True)
