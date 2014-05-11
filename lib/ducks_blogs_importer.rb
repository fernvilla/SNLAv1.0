require 'feedjira'

class DucksImporter
  def self.import_blogs
    anaheim_calling = Feedjira::Feed.fetch_and_parse("http://www.anaheimcalling.com/rss/current")
    on_the_duck_pond = Feedjira::Feed.fetch_and_parse("http://ontheduckpond.com/feed")

    if defined? anaheim_calling.entries
      anaheim_calling.entries.each do |entry|
        Duck.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    entry.summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Anaheim Calling"
        )
      end
    end

    if defined? on_the_duck_pond.entries
      on_the_duck_pond.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Duck.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "On the Duck Pond"
        )
      end
    end
  end
end