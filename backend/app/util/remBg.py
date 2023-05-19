from rembg import remove
from PIL import Image

#画像の背景を透過する処理
def remove_bg():
    input_path = 'static/input.png'
    output_path = 'static/output.png'

    input = Image.open(input_path)
    output = remove(input)
    output.save(output_path)