# Using COUNT, get the number of cities in the USA.

SELECT COUNT(ID)
FROM city
WHERE CountryCode='USA';

# Find out the population and life expectancy for people in Argentina.

SELECT LifeExpectancy, Population
FROM country
WHERE name='Argentina';

# Using IS NOT NULL, ORDER BY, and LIMIT, which country has the highest life expectancy?

SELECT Name, LifeExpectancy
FROM country 
WHERE LifeExpectancy=(
     SELECT MAX(LifeExpectancy) FROM COUNTRY) IS NOT NULL
ORDER BY LifeExpectancy DESC
LIMIT 1; 

# Using JOIN ... ON, find the capital city of Spain.

SELECT c.Name
FROM city c
JOIN country co ON co.Capital=c.ID
WHERE co.Name='Spain';

# Using JOIN ... ON, list all the languages spoken in the Southeast Asia region.

SELECT cl.Language
FROM countrylanguage cl
JOIN country co ON co.Code=cl.CountryCode
WHERE co.Region='Southeast Asia';

# or (TO AVOID REPETITIONS):

SELECT DISTINCT cl.Language
FROM countrylanguage cl
JOIN country co ON co.Code=cl.CountryCode
WHERE co.Region='Southeast Asia';

# Using a single query, list 25 cities around the world that start with the letter F.

SELECT Name
FROM city
WHERE name LIKE 'F%'
LIMIT 25;

# Using COUNT and JOIN ... ON, get the number of cities in China.

SELECT COUNT(ID)
FROM city c
LEFT JOIN country co ON co.Code = c.CountryCode
WHERE co.Name = 'China';

# Using IS NOT NULL, ORDER BY, and LIMIT, which country has the lowest population? Discard non-zero populations.

SELECT Name, Population FROM country
WHERE population IS NOT NULL
AND Population!=0
ORDER BY population ASC LIMIT 1;

# OR IF YOU WANT TO USE NESTED QUERIES:

SELECT Name, Population
FROM country
WHERE Population=(
    SELECT MIN(Population)
    FROM country
    WHERE Population!=0
);

# Using aggregate functions, return the number of countries the database contains.

SELECT COUNT(DISTINCT Code)
FROM country;

# What are the top ten largest countries by area?

SELECT Name
FROM country
ORDER BY SurfaceArea DESC
LIMIT 10;

# List the five largest cities by population in Japan.

SELECT c.Name, c.Population
FROM city c
JOIN country co ON co.Code=c.CountryCode
WHERE co.name='Japan'
ORDER BY c.Population DESC
LIMIT 5;

# List the names and country codes of every country with Elizabeth II as its Head of State. You will need to fix the mistake first!

UPDATE country
SET HeadOfState='Elizabeth II'
WHERE HeadOfState='Elisabeth II';

SELECT Name, Code
FROM country
WHERE HeadOfState='Elizabeth II';

# List the top ten countries with the smallest population-to-area ratio. Discard any countries with a ratio of 0.

SELECT *
FROM (
    SELECT Name, Population, SurfaceArea, (Population/SurfaceArea) AS Ratio
    FROM country
    WHERE Population IS NOT NULL
    AND Population!=0
) AS PopulationToAreaRatio
ORDER BY Ratio
LIMIT 10;

# List every unique world language.

SELECT DISTINCT Language
FROM countrylanguage;

# List the names and GNP of the world's top 10 richest countries.

SELECT Name, GNP
FROM country
ORDER BY GNP DESC
LIMIT 10;

# List the names of, and number of languages spoken by, the top ten most multilingual countries.

SELECT DISTINCT Language, COUNT(Language) as Frequency
FROM countrylanguage
GROUP BY Language
ORDER BY Frequency DESC
LIMIT 10;

# List every country where over 50% of its population can speak German.

SELECT Name, cl.Percentage
FROM countrylanguage cl
JOIN country co ON co.Code=cl.CountryCode
WHERE cl.Language='German'
AND cl.Percentage>50
ORDER BY cl.Percentage DESC;

# Which country has the worst life expectancy? Discard zero or null values.

SELECT Name, LifeExpectancy
FROM country
WHERE LifeExpectancy=(
    SELECT MIN(LifeExpectancy)
    FROM country
    WHERE LifeExpectancy!=0
);

# List the top three most common government forms.

SELECT GovernmentForm
FROM country
GROUP BY GovernmentForm
ORDER BY Count(GovernmentForm) DESC
LIMIT 3;

# How many countries have gained independence since records began?

SELECT COUNT(IndepYear)
FROM country
WHERE IndepYear IS NOT NULL;

