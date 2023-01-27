#!/usr/bin/python3
""" 2-lifo_cache.py """
BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """ LIFOCache """
    def put(self, key, item):
        """ put """
        if key and item:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                last = list(self.cache_data.keys()).pop()
                print("DISCARD: {}".format(last))
                del self.cache_data[last]

    def get(self, key):
        """ get """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
