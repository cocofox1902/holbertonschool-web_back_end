#!/usr/bin/python3
""" 0-basic_cache.py """

BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """ BasicCache """

    def put(self, key, item):
        """ put """
        if key and item:
            self.cache_data[key] = item


    def get(self, key):
        """ get """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
