#!/usr/bin/env python3
""" filtered_logger.py """
import mysql.connector
import datetime


def get_db():
    connection = mysql.connector.connect(
        user='root',
        password='root',
        host='localhost',
        database='my_db'
    )
    return connection


def main():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()

    for row in rows:
        filtered_data = "name=***; email=***; phone=***; \
            ssn=***; password=***;"
        log = "[HOLBERTON] user_data INFO {}: {} \
            ip={}; last_login={}; user_agent={};".format(
            datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S,%f"),
            filtered_data,
            row[5],
            row[6].strftime("%Y-%m-%dT%H:%M:%S"),
            row[7]
        )
        print(log)


if __name__ == "__main__":
    main()
