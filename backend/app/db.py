from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

engine = create_engine('mysql+mysqlconnector://root:mysqlrootpass@db:3306/jinbee_db')

# セッションの作成
db_session = scoped_session(
  sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
  )
)

# テーブルを作成する
Base = declarative_base()
Base.query = db_session.query_property()

class Talk(Base):
    __tablename__ = 'talks'

    id = Column(Integer, primary_key=True)
    talk_elements = relationship("TalkElement", backref="talks")

class TalkElement(Base):
    __tablename__ = 'talk_elements'

    id = Column(Integer, primary_key=True)
    role = Column(Integer)
    content = Column(String(255))
    order_id = Column(Integer)
    talk_id = Column(Integer, ForeignKey("talks.id"))