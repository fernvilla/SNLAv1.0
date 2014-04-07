require 'feedjira'

class EspnImporter
  def self.import_espn
    source = "ESPN"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angeleslakers")

    lakers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')

      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    Laker.where(source: 'ESPN').count
  end
end