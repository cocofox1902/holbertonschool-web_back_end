#!/usr/bin/env python3
""" filtered_logger.py """
import re
import logging
from typing import List
from os import environ
from mysql.connector import connection

PII_FIELDS = ("name", "email", "phone", "ssn", "password")


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """ format function """
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def get_logger() -> logging.Logger:
    """ get_logger function """
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(RedactingFormatter(PII_FIELDS))
    logger.addHandler(stream_handler)
    return logger


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """ filter_datum function """
    for field in fields:
        message = re.sub(f'{field}=(.*?){separator}',
                         f'{field}={redaction}{separator}', message)
    return message


def get_db():
    """ get_db function """
    connection = mysql.connector.connect(
        user='root',
        password='root',
        host='localhost',
        database='my_db'
    )
    return connection


def main():
    """ main function """
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
