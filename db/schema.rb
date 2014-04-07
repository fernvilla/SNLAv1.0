# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140407054735) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bruins", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "chivas", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clippers", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dodgers", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "galaxies", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "kings", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "lakers", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sparks", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "trojans", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.text     "summary"
    t.datetime "published"
    t.string   "url"
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
