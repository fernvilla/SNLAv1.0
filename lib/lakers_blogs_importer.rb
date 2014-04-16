require 'feedjira'

class LakersImporter
  def self.import_blogs
    inside_the_lakers = Feedjira::Feed.fetch_and_parse("http://www.insidesocal.com/lakers/feed/")
    lakers_nation = Feedjira::Feed.fetch_and_parse("http://www.lakersnation.com/feed/")
    forum_blue_and_gold = Feedjira::Feed.fetch_and_parse("http://www.forumblueandgold.com/feed/")
    silver_screen_and_roll = Feedjira::Feed.fetch_and_parse("http://www.silverscreenandroll.com/rss/current")
    laker_nation = Feedjira::Feed.fetch_and_parse("http://lakernation.com/feed/")
    lakerholicz = Feedjira::Feed.fetch_and_parse("http://lakerholicz.com/feed")
    lake_show_life = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/feed/")
    lake_show_life_two = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/category/nba/nbanews/feed/")
    lake_show_life_three = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/category/lakers-2/feed/")
    lake_show_life_four = Feedjira::Feed.fetch_and_parse("http://lakeshowlife.com/category/lakers/recaps/feed/")
    fansided = Feedjira::Feed.fetch_and_parse("http://fansided.com/tag/los-angeles-lakers/feed/")

    inside_the_lakers.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Inside the Lakers"
      )
    end

    lakers_nation.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Lakers Nation"
      )
    end

    forum_blue_and_gold.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Forum Blue and Gold"
      )
    end

    silver_screen_and_roll.entries.each do |entry|
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Silver Screen and Roll"
      )
    end

    laker_nation.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Laker Nation"
      )
    end

    lakerholicz.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Lakerholicz"
      )
    end

    lake_show_life.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Lake Show Life"
      )
    end

    lake_show_life_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Lake Show Life"
      )
    end

    lake_show_life_three.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Lake Show Life"
      )
    end

    lake_show_life_four.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Lake Show Life"
      )
    end

    fansided.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     "Fansided"
      )
    end
  end
end