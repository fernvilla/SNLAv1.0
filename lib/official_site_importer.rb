require 'feedjira'

class OfficialSiteImporter
  def self.import_official_news
    source = "Official Site"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://www.nba.com/lakers/rss.xml")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://www.nba.com/clippers/rss.xml")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://losangeles.dodgers.mlb.com/partnerxml/gen/news/rss/la.xml")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://kings.nhl.com/rss/news.xml")
    galaxy_feed = Feedjira::Feed.fetch_and_parse("http://www.lagalaxy.com/rss/en.xml")
    chivas_feed = Feedjira::Feed.fetch_and_parse("http://www.cdchivasusa.com/rss/en.xml")
    bruins_feed = Feedjira::Feed.fetch_and_parse("http://www.uclabruins.com/rss.dbml?db_oem_id=30500&media=news")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://ducks.nhl.com/rss/news.xml")

    lakers_feed.entries.each do |entry|
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    clippers_feed.entries.each do |entry|
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    dodgers_feed.entries.each do |entry|
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    kings_feed.entries.each do |entry|
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    galaxy_feed.entries.each do |entry|
      # summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Galaxy.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    chivas_feed.entries.each do |entry|
      # Remove everything after the | in title
      title = entry.title.gsub(/\|.*$/, '')

      Chiva.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    ducks_feed.entries.each do |entry|
      Duck.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end
  end
end