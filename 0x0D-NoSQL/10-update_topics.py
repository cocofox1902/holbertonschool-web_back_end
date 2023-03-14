#!/usr/bin/env python3
""" 10-update_topics.py """


def update_topics(mongo_collection, name, topics):
    """ 10-update_topics.py """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
