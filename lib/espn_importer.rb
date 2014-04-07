require 'feedjira'

class EspnImporter
  def self.import_espn
    source = "ESPN"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angeleslakers")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesdodger-report")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesclippers")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angeleskings")

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

    dodgers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    clippers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    kings_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end
  end
end