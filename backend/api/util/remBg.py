from rembg import remove
from PIL import Image

def remove_bg():
    input_path = 'api/public/input.png'
    output_path = 'api/public/output.png'

    input = Image.open(input_path)
    output = remove(input)
    output.save(output_path)