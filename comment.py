filename = 'comment.txt'

def get_chat():
    full_chat = []
    with open(filename) as f:
        for line in f:
            full_chat.append({"message": line.rstrip("\n\r")})
    return full_chat

def add_message(strDate, strMessage):
    with open(filename, "a") as f:
        f.write(strDate + " ---- " + strMessage + "\n")
