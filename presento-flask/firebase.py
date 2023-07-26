from firebase_admin import credentials, initialize_app, storage

cred = credentials.Certificate("firebase_credentials.json")
app = initialize_app(cred, {"storageBucket": "presento-1d9cd.appspot.com"})


def upload_document(filepath):
    bucket = storage.bucket()
    blob = bucket.blob(filepath)
    blob.upload_from_filename(filepath)
    blob.make_public()

    return blob.public_url


filepath = "my_presentation.pptx"
url = upload_document(filepath)

print(url)

