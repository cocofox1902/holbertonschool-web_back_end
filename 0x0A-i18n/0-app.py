#!/usr/bin/env python3
"""
app module
"""
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    """
    index route
    """
    return render_template("0-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000")
