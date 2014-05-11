require 'feedjira'

class TrojansImporter
  def self.import_blogs
    inside_usc = Feedjira::Feed.fetch_and_parse("http://www.insidesocal.com/usc/feed/")
    conquest_chronicles = Feedjira::Feed.fetch_and_parse("http://www.conquestchronicles.com/rss/current")
    rivals = Feedjira::Feed.fetch_and_parse("https://usc.rivals.com/rss2feed.asp?SID=995")
    scout = Feedjira::Feed.fetch_and_parse("http://rss.scout.com/rss.aspx?sid=15")


    if defined? inside_usc.entries
      inside_usc.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Trojan.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Inside USC"
        )
      end
    end

    if defined? conquest_chronicles.entries
      conquest_chronicles.entries.each do |entry|
        # summary = entry.summary.gsub(/<[^>]*>/, '')
        Trojan.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    entry.summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Conquest Chronicles"
        )
      end
    end

    if defined? rivals.entries
      rivals.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Trojan.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Rivals"
        )
      end
    end

    if defined? scout.entries
      scout.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Trojan.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Scout"
        )
      end
    end
  end
end