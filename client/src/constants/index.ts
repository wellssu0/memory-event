export enum BaseAnimationType{
  ZOOM_IN = 'scale(0)',
  SLIDE_UP = 'translateY(-100%)',
  SLIDE_DOWN = 'translateY(100%)',
  SLIDE_RIGHT = 'translateX(-100%)',
  SLIDE_LEFT = 'translateX(100%)',
}


export enum StorageKey{
  USER_INFO = 'user_info',
  OPEN_ID = 'open_id',
}


export enum FormType{
  INPUT = 'input',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  RICH_TEXT = 'rich_text',
  MONTH_DATE = 'month_date',
  YEAR_DATE = 'year_date',
  DAY_DATE = 'day_date',
  WEEK_DATE = 'week_date',
}

export enum EventCycleMode{
  SINGLE = 'single',
  YEAR = 'year',
  MONTH = 'month'
}

export enum CalendarType{
  LUNAR = 'lunar', // 农历
  SOLAR = 'solar', // 阳历
}
