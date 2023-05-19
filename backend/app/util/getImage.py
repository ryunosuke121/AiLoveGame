import urllib.error
import urllib.request
#保存先のパス
dst_path='static/input.png'

#urlから取得した画像を保存する処理
def download_img(url):
    try:
        with urllib.request.urlopen(url) as web_file:
            data = web_file.read()
            with open(dst_path, mode='wb') as local_file:
                local_file.write(data)
    except urllib.error.URLError as e:
        print(e)