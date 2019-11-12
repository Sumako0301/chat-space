# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|email|integer|null: false, unique: true|
|password|integer|null: false, foreign_key: true|

### Association
  -has_many :posts
 - has_many :groups_users
 - has_many :groups, through: :groups_users


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|

### Association
 - has_many :groups_users
 - has_many :users, through: :groups_users
 - has_many :posts


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  - belongs_to :group
  - belongs_to :user


## postsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,|
|text|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
  - belongs_to :user
  - belong_to :group

