require 'feedjira'

class BruinsImporter
  def self.import_blogs
    inside_ucla = Feedjira::Feed.fetch_and_parse("http://www.insidesocal.com/ucla/feed/")
    bruins_nation = Feedjira::Feed.fetch_and_parse("http://www.bruinsnation.com/rss/current")
    punting_is_winning = Feedjira::Feed.fetch_and_parse("http://www.puntingiswinning.com/feed/")
    go_joe_bruin = Feedjira::Feed.fetch_and_parse("http://gojoebruin.com/feed/")
    bruin_247 = Feedjira::Feed.fetch_and_parse("http://ucla.247sports.com/Page/UCLA-Home-100011/Articles.Rss")
    rivals = Feedjira::Feed.fetch_and_parse("https://ucla.rivals.com/rss2feed.asp?SID=1012")
    scout = Feedjira::Feed.fetch_and_parse("http://rss.scout.com/rss.aspx?sid=12")

    if defined? inside_ucla.entries
      inside_ucla.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Bruin.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Inside UCLA"
        )
      end
    end

    if defined? bruins_nation.entries
      bruins_nation.entries.each do |entry|
        Bruin.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    entry.summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Bruins Nation"
        )
      end
    end

    if defined? punting_is_winning.entries
      punting_is_winning.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Bruin.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Punting is Winning"
        )
      end
    end

    if defined? go_joe_bruin.entries
      go_joe_bruin.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Bruin.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Go Joe Bruin"
        )
      end
    end

    if defined? bruin_247.entries
      bruin_247.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Bruin.where(url: entry.url).first_or_create(
          title:      entry.title,
          author:     entry.author,
          summary:    summary,
          published:  entry.published,
          url:        entry.url,
          image:      entry.image,
          source:     "Bruin 247"
        )
      end
    end

    if defined? rivals.entries
      rivals.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Bruin.where(url: entry.url).first_or_create(
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
        Bruin.where(url: entry.url).first_or_create(
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