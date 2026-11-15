
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/images/<path:filename>")
def serve_image(filename):
    return send_from_directory("static", filename)

@app.route("/viikon-lottorivi")
def numerot():
    return """
    <!DOCTYPE html>
    <html lang="fi">
        <head>
            <title>Viikon lottorivi</title>
            <link rel="stylesheet" href="/static/style.css">
            <script src="/static/script.js" defer></script>
        </head>

        <body>
            <header>
                <h1>Viikon lottorivi</h1>
            </header>

            <br>

            <p class="lottonumerot">1, 4, 5, 6, 7, 9, 1</p>

            <div class="buttons">
                <p>==></p>
                <button onclick="pressButton()">Does nothing</button>
                <p><==</p>
            </div>
        </body>
    </html>
    """

if __name__ == "__main__":
    app.run(debug=True)
