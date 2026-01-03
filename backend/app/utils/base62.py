
import string

BASE62_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
BASE = len(BASE62_ALPHABET)

def encode(num: int) -> str:
    if num == 0:
        return BASE62_ALPHABET[0]
    
    arr = []
    while num:
        num, rem = divmod(num, BASE)
        arr.append(BASE62_ALPHABET[rem])
    
    arr.reverse()
    return ''.join(arr)

def decode(string: str) -> int:
    num = 0
    for char in string:
        num = num * BASE + BASE62_ALPHABET.index(char)
    return num