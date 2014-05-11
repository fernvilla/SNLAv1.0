require 'feedjira'

class LASportsHubImporter
  def self.import_la_sports_hub
    source = "LA Sports Hub"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://lasportshub.com/category/lakers/feed/")

    if defined? lakers_feed.entries
      lakers_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Laker.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     source
        )
      end
    end
  end
end