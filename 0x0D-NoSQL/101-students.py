#!/usr/bin/env python3
""" 101-students.py """
import pymongo


def top_students(mongo_collection):
    """ 101-students.py """
    pipeline = [
        {
            '$project': {
                'name': 1,
                'averageScore': { '$avg': '$topics.score' }
            }
        },
        { '$sort': { 'averageScore': -1 } }
    ]
    return list(mongo_collection.aggregate(pipeline))
