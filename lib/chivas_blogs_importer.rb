require 'feedjira'

class ChivasImporter
  def self.import_blogs
    goat_parade = Feedjira::Feed.fetch_and_parse("http://www.thegoatparade.com/rss/current")

    goat_parade.entries.each do |entry|
      Chiva.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "The Goat Parade"
      )
    end
  end
end