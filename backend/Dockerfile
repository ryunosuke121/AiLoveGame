# python3.9のイメージをダウンロード
FROM python:3.9-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /src

# pipを使ってpoetryをインストール
RUN pip install poetry

# requirements.txtをコピー
COPY requirements.txt .

# ライブラリをインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションのコードをコピー
COPY . .

# uvicornのサーバーを立ち上げる
ENTRYPOINT ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8070",  "--reload"]